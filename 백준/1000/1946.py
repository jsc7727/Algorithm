# https://www.acmicpc.net/problem/1946

# 2
# 5
# 3 2
# 1 4
# 4 1
# 2 3
# 5 5
# 7
# 3 6
# 7 3
# 4 2
# 1 4
# 5 7
# 2 5
# 6 1


# 1. 정렬
# 2.  ex)"1 4" 일때 1에 대응되는 값인 4보다 큰 값은 신입사원으로 선택되기 어렵다.
# 3. 2번을 바탕으로 1(서류심사 성적)일때 대응되던 값(면접성적 순위)을 m에다가 삽입
# for 문으로 돌면서 면접성적 순위가 m 보다 작으면 result += 1
# m = 면접성적 순위

import sys
input = sys.stdin.readline
c = int(input().strip())

for _ in range(c):
    count = int(input().strip())
    arr = []
    for _ in range(count):
        x, y = map(int, input().strip().split())
        arr.append([x, y])

    arr.sort()
    result = 1
    m = arr[0][1]
    for x, y in arr[1:]:
        if m > y:
            result += 1
            m = y
    print(result)
