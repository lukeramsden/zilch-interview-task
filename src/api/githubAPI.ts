import { Links } from 'parse-link-header'

export interface Label {
  id: number
  name: string
  color: string
}

export interface User {
  login: string
  avatar_url: string
}

export interface Issue {
  id: number
  title: string
  number: number
  user: User
  body: string
  labels: Label[]
  comments_url: string
  state: 'open' | 'closed'
  comments: number
}

export interface RepoDetails {
  id: number
  name: string
  full_name: string
  open_issues_count: number
}

export interface Comment {
  id: number
  body: string
  user: User
  created_at: string
  updated_at: string
}

export interface IssuesResult {
  pageLinks: Links | null
  pageCount: number
  issues: Issue[]
}

export const createIssuesUrl = (
  org: string,
  repo: string,
  page = 1,
  perPage = 25
) => `https://api.github.com/repos/${org}/${repo}/issues?per_page=${perPage}&page=${page}`;

export const createRepoDetailsUrl = (org: string, repo: string) => `https://api.github.com/repos/${org}/${repo}`;

export const createIssueUrl = (org: string, repo: string, number: number) => `https://api.github.com/repos/${org}/${repo}/issues/${number}`;
