import { Controller, Get, Param } from '@nestjs/common';
import { GithubService } from './github.service';

@Controller('github')
export class GithubController {
  constructor(private readonly githubService: GithubService) {}

  @Get('users/:name')
  users(@Param('name') name) {
    return this.githubService.getUser(name);
  }
}
