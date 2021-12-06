# https://www.acmicpc.net/problem/11497


# 왕관 모양을 생각했다.
# 데이터를 받아서 정렬한다.
# 정렬된 데이터를 짝수와 홀수로 나누어 배열 두개에 각각 담는다.
# 짝수 배열 + 홀수배열[::-1] 한 값을 O(N) 탐색하여 높낮이 차이의 최대값을 출력했다.

import sys
input = sys.stdin.readline
c = int(input().strip())

for _ in range(c):
    cc = int(input().strip())
    arr = list(map(int, input().strip().split()))
    arr.sort()
    arr1 = []
    arr2 = []
    for i in range(cc):
        if i % 2 == 0:
            arr1.append(arr[i])
        else:
            arr2.append(arr[i])
    # print(arr1+arr2[::-1])
    arr = arr1+arr2[::-1]
    diffValue = 0
    for i in range(len(arr)-1):
        diffValue = max(abs(arr[i] - arr[i+1]), diffValue)
    else:
        diffValue = max(abs(arr[i+1] - arr[0]), diffValue)
    print(diffValue)
