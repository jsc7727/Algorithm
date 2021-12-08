# https://www.acmicpc.net/problem/2805

# https://claude-u.tistory.com/446
# 위 사람거 참고함.
# 생각이 잘 안나네 ㅠㅠ

import sys
input = sys.stdin.readline

n, m = map(int, input().strip().split())

arr = list(map(int, input().strip().split()))
start = 1
end = max(arr)
print(arr)


def biSum():
    global start, end
    while start <= end:
        temp = (start+end)//2
        s = 0
        for i in arr:
            if i >= temp:
                s += (i-temp)
        if s >= m:
            start = temp+1
        else:
            return temp-1
    return end


print(biSum())
