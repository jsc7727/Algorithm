# https://www.acmicpc.net/problem/1929

import sys
import math
input = sys.stdin.readline

n, m = map(int, input().strip().split())

arr = [True]*(m+1)


def isPrime(value):
    end = int(math.sqrt(value))
    for i in range(2, end+1):
        if value % i == 0:
            return False
    return True


arr2 = []
for i in range(2, m+1):
    if not isPrime(i):
        continue
    for k in range(n-(n % i), m+1, i):
        arr[k] = False
    arr2.append(i)

for i in arr2:
    arr[i] = True

for i in range(n, m+1):
    if i > 1 and arr[i]:
        print(i)
