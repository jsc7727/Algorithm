import sys
import heapq


def solution():
    dirs = [[-1, 0], [0, 1], [1, 0], [0, -1]]
    distance = [[float('inf') for _ in range(N)] for _ in range(N)]
    distance[0][0] = field[0][0]
    queue = []
    heapq.heappush(queue, (distance[0][0], 0, 0))
    for i in distance:
        print(i)
    print(queue)
    print()
    while queue:
        now_cost, now_i, now_j = heapq.heappop(queue)
        for i in distance:
            print(i)
        print(queue, now_cost, distance[now_i][now_j])
        print()
        if now_cost < distance[now_i][now_j]:
            continue

        for value in dirs:
            visit_i, visit_j = now_i + value[0], now_j + value[1]
            if 0 <= visit_i < N and 0 <= visit_j < N:
                visit_cost = field[visit_i][visit_j]
                if now_cost + visit_cost < distance[visit_i][visit_j]:
                    distance[visit_i][visit_j] = now_cost + visit_cost
                    heapq.heappush(
                        queue, (distance[visit_i][visit_j], visit_i, visit_j))

    return distance[N - 1][N - 1]


if __name__ == "__main__":
    num = 1

    while True:
        N = int(input())
        if not N:
            break
        field = [list(map(int, sys.stdin.readline().rsplit()))
                 for _ in range(N)]

        print(f"Problem {num}: {solution()}")
        num += 1
