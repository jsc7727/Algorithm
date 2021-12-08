# https://www.acmicpc.net/problem/1920

# 수 찾기

# 바이너리 서치 함수를 만들고
# 마지막에 나온 위치의 좌우를 탐색한 후 값이 있으면 1 없으면 0

import sys
input = sys.stdin.readline
c = int(input().strip())
arr1 = list(map(int, input().strip().split()))
cc = int(input().strip())
arr2 = list(map(int, input().strip().split()))
arr1.sort()


def biSearch(arr, value):
    x = 0
    y = len(arr)-1
    while x < y:
        temp = (x+y)//2
        if arr[temp] > value:
            y = temp
        else:
            x = temp+1
    if arr[x] == value or arr[x-1] == value:
        return 1
    else:
        return 0


for i in arr2:
    print(biSearch(arr1, i))
