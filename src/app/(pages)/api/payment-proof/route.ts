// pages/api/upload.ts
import { v2 as cloudinary } from 'cloudinary';
import { IncomingForm, File } from 'formidable'; // Use File for a single uploaded file
import { NextApiRequest, NextApiResponse } from 'next';
import { revalidatePath } from 'next/cache';

// Cloudinary configuration
cloudinary.config({
  cloud_name: process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

// Next.js configuration to handle file uploads
export const config = {
  api: {
    bodyParser: false, // We are handling the body parsing manually
  },
};

// Handle POST requests
export const POST = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const form = new IncomingForm();
    form.parse(req, async (err: any, fields: Record<string, any>, files: { file: File[] }) => {
      if (err) {
        return res.status(400).json({ error: 'Error parsing file' });
      }

      // Ensure the 'file' field is present in the form data
      if (!files.file || files.file.length === 0) {
        return res.status(400).json({ error: 'No file uploaded' });
      }

      const file = files.file[0]; // Assuming 'file' is the field name in the form

      // Convert file to buffer for uploading to Cloudinary
      const arrayBuffer = await file.arrayBuffer();
      const buffer = Buffer.from(arrayBuffer);

      cloudinary.uploader.upload_stream(
        {
          tags: ['nextjs-server-actions-upload-sneakers'],
          upload_preset: 'nextjs-server-actions-upload',
        },
        async (error, result) => {
          if (error) {
            return res.status(500).json({ error: 'Error uploading to Cloudinary' });
          }

          // Revalidate the path after upload (if needed)
          revalidatePath('/');

          res.status(200).json({ secure_url: result?.secure_url });
        }
      ).end(buffer);
    });
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
};
