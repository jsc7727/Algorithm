# https://www.acmicpc.net/problem/1018

# 8 8
# WBWBWBWB
# BWBWBWBW
# WBWBWBWB
# BWBBBWBW
# WBWBWBWB
# BWBWBWBW
# WBWBWBWB
# BWBWBWBW

import sys
input = sys.stdin.readline
n, m = map(int, input().strip().split())
arr = [input().strip() for _ in range(n)]
wb = ['W', 'B']
result = 33
for i in range(n-7):
    for j in range(m-7):
        count1 = 0
        count2 = 0
        for k in range(i, i+8):
            temp = ""
            for l in range(j, j+8):
                # print(k, l)
                t = wb[(l+(k % 2)) % 2]
                if arr[k][l] != t:
                    count1 += 1
                else:
                    count2 += 1
        result = min(count1, count2, result)
print(result)
