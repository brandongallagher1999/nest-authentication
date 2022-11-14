import { Controller, Post, Res, Req } from "@nestjs/common";
import { Response } from "express";
import { AppService } from "./app.service";

@Controller("login")
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Post()
  login(@Req() request: Request, @Res() response: Response): string {
    const token = this.appService.login(request.body);
    response.status(201);
    response.cookie("loginToken", JSON.stringify(token), {
      httpOnly: true,
    });

    response.send(token);

    return token;
  }
}
