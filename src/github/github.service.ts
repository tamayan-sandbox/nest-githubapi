import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { firstValueFrom } from 'rxjs';

@Injectable()
export class GithubService {
  constructor(private httpService: HttpService) {}
  async getUser(name: string): Promise<string> {
    const url = 'https://api.github.com/users/' + name;
    const res = await firstValueFrom(this.httpService.get(url));
    return res.data;
  }

  async getIssues(owner: string, repo: string): Promise<string> {
    const url = 'https://api.github.com/repos/' + owner + '/' + repo + 'issues';
    const res = await firstValueFrom(this.httpService.get(url));
    return res.data;
  }
}
