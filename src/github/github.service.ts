import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { lastValueFrom } from 'rxjs';

@Injectable()
export class GithubService {
  constructor(private httpService: HttpService) {}

  async getUser(name: string): Promise<string> {
    const url = 'https://api.github.com/users/' + name;
    const res = await lastValueFrom(this.httpService.get(url));
    return res.data;
  }

  async getIssues(owner: string, repo: string): Promise<string> {
    const url =
      'https://api.github.com/repos/' + owner + '/' + repo + '/issues';
    const res = await lastValueFrom(this.httpService.get(url));
    return res.data;
  }

  async createIssues(owner: string, repo: string, data): Promise<string> {
    const url =
      'https://api.github.com/repos/' + owner + '/' + repo + '/issues';
    const headers = {
      'Content-Type': 'application/json',
      Accept: 'application/vnd.github.v3+json',
      Authorization: 'token ' + process.env.GITHUB_TOKEN,
    };
    const res = await lastValueFrom(
      this.httpService.post(url, data, { headers: headers }),
    );
    return res.data;
  }
}
