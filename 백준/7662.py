#  7662번
# 문제
# 예제 입력
# 2
# 7
# I 16
# I -5643
# D -1
# D 1
# D 1
# I 123
# D -1
# 9
# I -45
# I 653
# D 1
# I -642
# I 45
# I 97
# D 1
# D -1
# I 333

# 예제 출력
# EMPTY
# 333 -45

import heapq
import sys
input = sys.stdin.readline

c = int(input().strip())
visited = []
q1 = []
q2 = []
for _ in range(c):
    count = int(input().strip())
    visited = [False] * 1000001
    q1 = []
    q2 = []
    for i in range(count):

        x, value = input().strip().split()

        value = int(value)

        if x == 'I':
            visited[i] = True
            heapq.heappush(q1, (value, i, value))
            heapq.heappush(q2, (-value, i, value))

        elif x == 'D':
            if value == -1:
                while q1 and not visited[q1[0][1]]:
                    heapq.heappop(q1)
                if q1:
                    visited[q1[0][1]] = False
                    heapq.heappop(q1)

            if value == 1:
                while q2 and not visited[q2[0][1]]:
                    heapq.heappop(q2)
                if q2:
                    visited[q2[0][1]] = False
                    heapq.heappop(q2)

    while q1 and not visited[q1[0][1]]:
        heapq.heappop(q1)
    while q2 and not visited[q2[0][1]]:
        heapq.heappop(q2)
    if len(q1) == 0 and len(q2) == 0:
        print("EMPTY")
    else:
        print(q2[0][2], q1[0][2])
