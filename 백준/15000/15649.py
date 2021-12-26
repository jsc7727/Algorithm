
import sys
from itertools import permutations
input = sys.stdin.readline

n, m = map(int, input().strip().split())

answer = map(str, range(1, n+1))

for i in range(1, m):
    answer = [k+" "+str(j) for k in answer for j in range(1, n+1)
              if sorted(k.split(" ")+[str(j)]) == k.split(" ")+[str(j)]]

for i in answer:
    print(i)
