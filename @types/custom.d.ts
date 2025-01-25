// custom.d.ts or global.d.ts
declare module 'jsonwebtoken' {
    export interface JwtPayload {
      userId: string;
    }
  
    export function sign(
      payload: JwtPayload,
      secret: string | Buffer,
      options?: jwt.SignOptions
    ): string;
  
    export function verify(
      token: string,
      secretOrPublicKey: string | Buffer,
      options?: jwt.VerifyOptions
    ): JwtPayload | string;
  
    export interface SignOptions {
      expiresIn?: string | number;
      audience?: string;
      issuer?: string;
      jwtid?: string;
      notBefore?: string | number;
      algorithm?: string;
      keyid?: string;
      header?: object;
    }
  
    export interface VerifyOptions {
      algorithms?: string[];
      audience?: string | string[];
      clockTimestamp?: number;
      issuer?: string | string[];
      jwtid?: string;
      maxAge?: string;
      clockTolerance?: number;
      subject?: string;
      ignoreExpiration?: boolean;
    }
  }
  
  declare module 'bcryptjs' {
    export function hash(data: string, saltRounds: number): Promise<string>;
    export function compare(data: string, encrypted: string): Promise<boolean>;
  }
  