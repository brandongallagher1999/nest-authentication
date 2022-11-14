import { Controller, Get } from "@nestjs/common";
import { TestingService } from "./testing.service";

@Controller("testing")
export class TestingController {
  constructor(private readonly testingService: TestingService) {}

  @Get()
  test(): string {
    return "okay";
  }
}
