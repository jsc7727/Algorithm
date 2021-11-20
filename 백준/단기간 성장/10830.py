# https://www.acmicpc.net/problem/10830

# 문제
# 크기가 N*N인 행렬 A가 주어진다. 이때, A의 B제곱을 구하는 프로그램을 작성하시오. 수가 매우 커질 수 있으니, A^B의 각 원소를 1,000으로 나눈 나머지를 출력한다.

# 입력
# 첫째 줄에 행렬의 크기 N과 B가 주어진다. (2 ≤ N ≤  5, 1 ≤ B ≤ 100,000,000,000)

# 둘째 줄부터 N개의 줄에 행렬의 각 원소가 주어진다. 행렬의 각 원소는 1,000보다 작거나 같은 자연수 또는 0이다.

# 출력
# 첫째 줄부터 N개의 줄에 걸쳐 행렬 A를 B제곱한 결과를 출력한다.

# 예제 입력 1
# 2 5
# 1 2
# 3 4
# 예제 출력 1
# 69 558
# 337 406

# 예제 입력 2
# 3 3
# 1 2 3
# 4 5 6
# 7 8 9
# 예제 출력 2
# 468 576 684
# 62 305 548
# 656 34 412

# 예제 입력 3
# 5 10
# 1 0 0 0 1
# 1 0 0 0 1
# 1 0 0 0 1
# 1 0 0 0 1
# 1 0 0 0 1
# 예제 출력 3
# 512 0 0 0 512
# 512 0 0 0 512
# 512 0 0 0 512
# 512 0 0 0 512
# 512 0 0 0 512


import sys
n, b = map(int, sys.stdin.readline().strip().split())
c = 1000
arr = [list(map(int, sys.stdin.readline().strip().split())) for _ in range(n)]


def matrixMulti(a1, a2):
    length = len(a1)
    temp = [[0] * length for i in range(length)]
    for x in range(length):  # a1 열
        for y in range(length):  # a1 행
            for z in range(length):  # 증가
                temp[x][y] += a1[x][z] * a2[z][y]
    return temp


def divC(arr):
    for i in range(len(arr)):
        for k in range(len(arr)):
            arr[i][k] %= c
    return arr

# @test code matrixMulti
# t = [[1, 2], [3, 4]]
# print(matrixMulti(t, t))


def dac(b):
    if b == 1:
        return divC(arr)
    elif (b % 2 == 1):
        temp = dac(b//2)
        # print(" 홀수 bb :", b, matrixMulti(matrixMulti(temp, temp), arr))
        return divC(matrixMulti(matrixMulti(temp, temp), arr))
    else:
        temp = dac(b//2)
        # print(" 짝수 bb :", b, matrixMulti(temp, temp))
    return divC(matrixMulti(temp, temp))


for i in dac(b):
    print(*i)
