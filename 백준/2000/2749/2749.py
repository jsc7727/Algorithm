# https://www.acmicpc.net/problem/2749


c = int(input())

N = 1000000
P = N // 10 * 15

arr = [0] * P

arr[1] = 1
for i in range(2, P):
    arr[i] = (arr[i-1]+arr[i-2]) % N

print(arr[c % P])
