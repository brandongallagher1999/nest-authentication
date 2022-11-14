import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";

import { JwtModule } from "@nestjs/jwt";

import { secretKey } from "./constants";
import { TestingModule } from "./testing/testing.module";

@Module({
  imports: [
    JwtModule.register({
      secret: secretKey,
      signOptions: { expiresIn: "10d" },
    }),
    TestingModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
