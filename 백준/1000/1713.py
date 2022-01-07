# https://www.acmicpc.net/problem/1713

# 3
# 9
# 2 1 4 3 5 6 2 7 2

import sys
input = sys.stdin.readline
from  import 

n = int(input().strip())
int(input().strip())
inputArray = map(int,input().strip().split())

result = []
for i in inputArray:
    result.sort(key:lambda x : (x[1],x[0]))
    if len(result) <= n:
        result.append()





