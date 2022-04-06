import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { firstValueFrom } from 'rxjs';

@Injectable()
export class GithubService {
  constructor(private httpService: HttpService) {}
  async fetch(): Promise<string> {
    const url = 'https://api.github.com/users/tamayan';
    const res = await firstValueFrom(this.httpService.get(url));
    return res.data;
  }
}
