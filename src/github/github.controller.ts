import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { GithubService } from './github.service';
import { Dto } from './dto';

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

  @Post('repos/:owner/:repo/issues')
  createIssues(@Param('owner') owner: string, @Param('repo') repo: string, @Body() data: Dto) {
    return this.githubService.createIssues(owner, repo, data);
  }
}
