import { forwardRef, Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';

import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { InvitationModule } from '../invitation/invitation.module';
import { UserModule } from '../user/user.module';

@Module({
  imports: [JwtModule, forwardRef(() => UserModule), forwardRef(() => InvitationModule)],
  controllers: [AuthController],
  providers: [AuthService],
  exports: [AuthService],
})
export class AuthModule {}
