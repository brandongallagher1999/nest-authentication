import { Injectable } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";

@Injectable()
export class AppService {
  constructor(private jwtService: JwtService) {}

  login(user: any): string {
    const payload = { username: user.username };
    const token = this.jwtService.sign(payload);
    return token;
  }
}
