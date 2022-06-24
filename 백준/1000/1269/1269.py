import sys
input = sys.stdin.readline

N, M = map(int, input().strip().split(' '))
set1 = {*map(int, input().strip().split(' '))}
set2 = {*map(int, input().strip().split(' '))}
print(len(set1 ^ set2))
