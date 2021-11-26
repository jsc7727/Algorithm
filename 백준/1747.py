# https://www.acmicpc.net/problem/1747

import sys
import math
input = sys.stdin.readline

n = int(input().strip())
m = 1000000
arr = [True]*(m+1)


def isPrime(value):
    end = int(math.sqrt(value))
    for i in range(2, end+1):
        if value % i == 0:
            return False
    return True


flag = True
for i in range(max(n, 2), m+1):
    if str(i) == str(i)[::-1] and isPrime(i):
        flag = False
        print(i)
        break

if flag:
    print(1003001)
