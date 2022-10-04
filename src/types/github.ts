export type GithubType = {
  user: {
    name: string,
    url: string,
    repositories: {
      nodes: [
        {
          createdAt: string,
          description: string,
          forkCount: number,
          name: string,
          stargazerCount: number,
          url: string,
          languages: {
            nodes: [
              {
                color: string,
                name: string
              }
            ],
            totalCount: number,
            totalSize: number,
            edges: [
              {
                node: {
                  color: string,
                  id: string,
                  name: string
                },
                size: number
              }
            ]
          }
        }
      ]
    }
  }
}