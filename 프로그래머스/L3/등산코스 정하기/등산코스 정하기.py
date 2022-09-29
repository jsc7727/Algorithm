import heapq


def solution(n, paths, gates, summits):
    answer = []
    graph = [[] for i in range(n+1)]
    for a, b, w in paths:
        graph[b].append([w, a])
        graph[a].append([w, b])

    for summit in summits:
        graph[summit] = []

    def dijkstra():
        summitsSet = set(summits)
        dp = [float('inf') for i in range(n+1)]
        for gate in gates:
            dp[gate] = 0

        hq = [[0, gate] for gate in gates]
        heapq.heapify(hq)
        while(hq):
            hqW, hqV = heapq.heappop(hq)

            if hqV in summitsSet or hqW > dp[hqV]:
                continue

            for [gW, gV] in graph[hqV]:
                m = max(gW, dp[hqV])
                if(dp[gV] > m):
                    dp[gV] = m
                    heapq.heappush(hq, [m, gV])

        return dp
    dp = dijkstra()
    summits.sort(key=lambda x: (dp[x], x))
    return [summits[0], dp[summits[0]]]
