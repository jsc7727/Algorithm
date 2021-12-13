# import collections


# def removeDuplicateLetters(s: str) -> str:
#     counter, seen, stack = collections.Counter(s), set(), []
#     print(sorted(counter.items(), key=lambda x: x[0]))

#     for char in s:
#         counter[char] -= 1
#         if char in seen:
#             continue
#         while stack and char < stack[-1] and counter[stack[-1]] > 0:
#             seen.remove(stack.pop())
#         stack.append(char)
#         seen.add(char)

#     return ''.join(stack)


# print(removeDuplicateLetters("asdsdsfqq"))

# for k in range(1, 1000):
#     if ((5300 + (9*k)) - (1000 + (2*k*k))) < 0:
#         print("break", k)
#         break
#     print(5300 + (9*k), 1000 + (2*k*k), (300 + (9*k)) - (1000 + (2*k*k)))
