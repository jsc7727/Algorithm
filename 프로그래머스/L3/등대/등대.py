import sys
sys.setrecursionlimit(10 ** 9)
def solution(n, lighthouse):
    answer = 0
    graph = [[] for i in range(n+1)]
    visited = [False for i in range(n+1)]
    
    for a,b in lighthouse:
        graph[a].append(b);
        graph[b].append(a);
    
    def dfs(idx):
        visited[idx] = True
        p,np = 1,0
        for nIdx in graph[idx]:
            if visited[nIdx]:
                continue
            resP, resNp = dfs(nIdx)
            p += min(resP,resNp)
            np += resP
        return p,np
    return min(dfs(1))