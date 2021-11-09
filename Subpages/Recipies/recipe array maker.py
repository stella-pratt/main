recipes = ["honey glazed roasted root vegetables", 170, "peas with feta, mint & olive oil", 171, 'green bean and asparagus salad', 172, 'potatoes, kumara and carrots roasted in herd and garlic butter with sour cream dressing', 173, 'new potatoes with herb mayonnaise', 174, 'mushrooms with garlic & sherry', 175, 'roasted pumpkin, celery, coriander & paprika', 176, 'roast kumara with apple, maple syrup & mint', 177, 'gilled eggplant with garlic, wine & tomatoes', 178, 'swede mash with roasted garlic', 179, 'roasted cajun kumara', 180, 'gratin dauphinois', 181, 'carrots & snow peas in a cumin glaze', 182, 'summer green salad', 183, 'asparagus, shaved fennel and pecorino with lemon-basil vinaigrette', 184, 'roast potatoes', 185, 'potato mash', 186, 'apsaragus carpaccio', 187]
names = []
category = []
number = []
count = 0
for i in recipes:
    if count % 2 == 0:
        names.append(i)
    elif count % 2 == 1:
        number.append(i)
    count += 1

cat = input("Category: ")
for i in range(len(names)):
    category.append(cat)
print(names)
print(number)
print(category)
print(len(category))
print(len(names))

