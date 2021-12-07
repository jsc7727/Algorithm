# https://www.acmicpc.net/problem/11724


# 6 5
# 1 2
# 2 5
# 5 1
# 3 4
# 4 6


# 런타임 에러 (RecursionError) 가 나서
# https://help.acmicpc.net/judge/rte/RecursionError  위치로 들어가서 보니 해결방법이 나와 있었다.
# sys.setrecursionlimit(10**6) 추가하니 재귀 깊이가 깊어져도 에러가 뜨지 않았다.

# input 배열 arr (정점의 개수 * 정점의 개수) 와
# check 배열 (정점의 개수만큼) 을 만든 후
# check 배열의 위치에 값이
#   0이면 bfs를 돌고 result += 1
#   1이면 넘어간다.
# result 출력

import sys
sys.setrecursionlimit(10**6)
input = sys.stdin.readline

n, m = map(int, input().strip().split())
arr = [[0]*n for _ in range(n)]
check = [0]*n

for _ in range(m):
    x, y = map(int, input().strip().split())
    x, y = x-1, y-1
    arr[x][y] = 1
    arr[y][x] = 1


def bfs(index):
    global arr
    check[index] = 1
    for i in range(n):
        if arr[index][i] == 1:
            if check[i] == 0:
                bfs(i)


result = 0
for i in range(n):
    if check[i] == 0:
        bfs(i)
        result += 1
print(result)
