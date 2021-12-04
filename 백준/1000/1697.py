# https://www.acmicpc.net/problem/1697

from collections import deque
s, e = map(int, input().split())

if (e < s):
    print(abs(s - e))
else:
    arr2 = [0] * 200001
    dq = deque([[s, 0]])

    while dq:
        start, count = dq.popleft()
        # print(start, count, dq)
        if start == e:
            print(count)
            break

        for i in (start+1, start-1, start*2):
            if 0 <= i < 200001 and not arr2[i]:
                arr2[i] += 1
                dq.append([i, count+1])


# dp로 풀고싶은데 흠.

    # if (e < s):
    #     print(abs(s - e))
    # else:
    #     temp = 0
    #     count = 0
    #     while True:
    #         s *= 2
    #         count += 1
    #         if s > e:
    #             temp = s//2
    #             count -= 1
    #             break
    #     print(temp, count)
    #     print(s-e)
    #     print(e-temp)
    #     print(s-e < e-temp)
    #     if s-e < e-temp:
    #         count += 1
    #         count += (s-e)//2
    #         count += (s-e) % 2
    #     else:
    #         count += (e-temp)//2
    #         count += (e-temp) % 2
    #     print(count)
