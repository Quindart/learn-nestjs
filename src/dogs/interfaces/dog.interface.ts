import { SetMetadata } from "@nestjs/common";

export const Version = (version: string) => SetMetadata('version', version);
