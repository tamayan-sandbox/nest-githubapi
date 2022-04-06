import { Controller, Get, Param, Post } from '@nestjs/common';
import { GithubService } from './github.service';

@Controller('github')
export class GithubController {
  constructor(private readonly githubService: GithubService) {}

  @Get('users/:name')
  users(@Param('name') name: string) {
    return this.githubService.getUser(name);
  }

  @Get('repos/:owner/:repo/issues')
  issues(@Param('owner') owner: string, @Param('repo') repo: string) {
    return this.githubService.getIssues(owner, repo);
  }
}
