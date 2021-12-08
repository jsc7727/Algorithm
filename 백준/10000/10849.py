# https://www.acmicpc.net/problem/10845

# 15
# push 1
# push 2
# front
# back
# size
# empty
# pop
# pop
# pop
# size
# empty
# pop
# push 3
# empty
# front

# 그냥 구현문제
# deque 사용함.

from collections import deque
import sys
input = sys.stdin.readline
c = int(input().strip())

dq = deque([])

for i in range(c):
    command = input().strip().split()
    if command[0] == 'push':
        dq.append(int(command[1]))
    elif command[0] == 'pop':
        print(dq.popleft() if dq else -1)
    elif command[0] == 'size':
        print(len(dq))
    elif command[0] == 'empty':
        print(1 if len(dq) == 0 else 0)
    elif command[0] == 'front':
        print(dq[0] if dq else -1)
    elif command[0] == 'back':
        print(dq[-1] if dq else -1)
