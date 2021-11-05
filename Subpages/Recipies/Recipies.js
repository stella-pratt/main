

const lamb = ["tagine of lamb with prunes & ras el hanout", 1, "spiced lamb & double tomato couscous salad", 2, 'roasted lamb racks with salad of butternut pumpkin, olives, rocket & tomatoes', 3, 'anchovy & almond crusted lamb racks', 4, 'nadi', 5, 'butterflied leg of lamb with roasted vegetables & yoghurt with sesame', 6, 'braised lamb shanks with oxtail ragout', 8, 'paprika-spiced lamb', 9, 'roast leg of lamb in an anchovy crust', 10, 'butterflied leg of lamb', 11, 'leg of lamb romagna style', 12, 'roasted rack of lamb with provencal coat confit of vegetables with honey, cumin & mint', 13, 'rack of lamb with anchovy & lemon crust & warm spinach, tomato & cannellini bean salad', 14, 'harira', 15, 'angello alla pugliese con salsa verde di maria pia', 16, 'prvencal-style leg of lamb with tomatoes & olives', 17, 'lamb & apricot tagine', 18, 'styffed lamb shoulder', 19, 'marinated boned leg of lamb', 20, 'spiced lamb with prunes', 21, 'roasted lamb rump with spicy carrot puree, couscous & pine nut ciabatta sauce', 22, 'lamb tagine', 23, 'spice rubbed, slow roasted leg of lamb', 24, 'thyme and bay leaf roasted rack of veal', 25, 'braised veal shanks with pumpkin puree & fried greens', 27, 'braised lamb with white beans', 28, 'roast lamb rack with mint & cucmuber salsa & potato salad', 29, 'penne with lamb ragu', 30, 'braised shoulder of lamb in a saffron broth', 31, 'butterflied leg of lamb with pecorino and herbs', 32, 'lamb steaks with herbed potato & feta fritters & fresh tomato sauce', 33, "shepherd's pie", 34, 'lamb hotpot', 34]
const beef = ["roasted eye fillet with tomato chermoula", 36, "carpet-bag steak with spinach & lemon beurre blanc", 37, 'roast eye fillet of beef with balsamic jus & baby vegetables', 38, 'eye fillet with rich mushroom sauce & blue cheese mash', 39, 'bearnaise sauce', 40, 'warm sliced eye fillet of beef with roasted shallot mayonnaise & tomato salad', 41, 'polenta with meat sauce', 42, 'rib eye roast with moroccan flavours', 43, 'beef fillet & soft polenta with wild mushrooms & pecorino', 44, 'fillet of beef bourguignon-style with horseradish mashed potato & wilted rainbow chard', 45, 'barbecued herbed scotch fillet of beef', 47, 'classic beef & mushroom stew with potato gnocchi', 48, 'mediterranean-style eye fillet of beef', 49, 'fillet of beef on tomato fondue with basil & artichoke dressing', 50, 'spiced beef with two sauces', 51, 'ten minute beef stroganoff', 52, 'angus steak au poivre with red wine butter & sauteed potatoes', 53, 'braised beef in barbera', 54, 'beef fillet with couscous salad & tomato yoghurt salsa', 55, 'fillet of beef in pastry with mushroom duxelles', 56, 'peppered eye fillet with pecorino and herb dressing', 57, 'beef fillet with mushroom dexelles', 58, 'oxtail ragu with handkerchief pasta & parmigiano-reggiano', 59, 'eye fillet steak stuffed with caramelised shallots & anchovies with hand cut fries', 60, "braised skirt steak with wild mushrooms, wet polenta & goat's cheese", 61, 'beef goulash with parsley dumplings', 62, 'panfried skirt steak with green tomatoes, green peppercorns, brandy & cream', 63, 'roasted crushed salty new potatoes', 64, 'anchovy dressing', 65, 'beef short ribs with porcini mushrooms', 66, 'roasted rib eye of beef', 67, 'grilled sirloin with mustard greens, walnuts, blue cheese & shiraz syrup', 68]
const pork = ["roast pork loin with five spice, orange & lemon zest & crunchy crackling", 70, "rack of pork with red wine glaze", 71, 'pork fillet with juniper, celeriac puree & watercress', 72, 'cider and lime spare ribs', 73, 'roasted pork with caramelised pears, chestnuts, celeriac puree & apple aioli', 74, 'stuffed and rolled roast pork', 75, 'pork scallopine and parmesan potatoes', 76, 'pork rib roast with oranges & red onions', 77, 'baked ham with brown sugar & mustard glaze', 78, 'asian pork burgers', 79, 'glazed pork spareribs', 79, 'pork scallopine with feta and pine nuts', 80, 'toad in the hole with dark ale roasted onions', 81, 'pork fillet and roasted vegetable salad with honey baked apples', 82]
const poultry = ["cibo's roast duck with roast beetroot confit, zefatit cheese, watercress & vincotto", 84, "spiced braised duck with bok choy", 85, 'duck with oranges, lemons & red wine vinegar glaze', 86, 'pan-fried chicken breast with gazpacho sauce', 87, 'spicy turkey patties with sweetcorn salsa', 88, 'barbecued chcken salad', 89, 'barbecued jerk chicken', 90, 'green curry with potato and coconut', 91, 'roast rabbit with apples, cider & mustard', 92, 'chicken & burghul salad', 93, 'roast duck with pomegranate molasses & rice pilaf', 94, 'roast chicken with lemon & rosemary', 95, 'chicken fricassee', 96, 'pot-roasted poussins with pancetta, chestnuts & cannellini bean smash', 97, 'roast chicken stuffed spago style with ricotta', 98, 'twice cooked duck with orange', 99, 'chicken and vegtable pies', 100, 'duck breast, cherries & braised new potatoes', 101, 'chicken rags with artichokes, lemon and pasta', 102]
const fish = ["egg-dipped fish with asparagus, tomato & rocket salad & lemon mayonnaise", 104, "slow-roast salmon with fennel bulb, capers & almonds", 105, 'syrian fish', 106, 'smoked fish salad', 107, 'bouillabaisse', 108, 'fish & potato curry with red cargo rice & almonds', 109, 'fish curry', 110, 'barbequed fish fillets with moroccan spices', 111, 'fresh fish with parsnip mash, grapefruit, olives & citrus vinaigrette', 112, 'psari plaki', 113, 'coconut lemon fish', 114, 'spicy wallnut-encrusted fish with orange & parsley salad', 115, 'baccala con i peperoni', 116, 'seared tuna carpaccio with chilli sesame dressing', 117, 'grilled fish fillets with a salad of cucumber, celery, dates, roasted red capsicums & walnuts', 118, 'marinated & griled fish with carrot, white bean & coriander salad', 119, 'pan-fried fish with lemon, capers and tomato', 120, 'salmon en croute with parsley and pecan butter', 121, 'crispy fish and couscous salad', 122, 'tarakihi tortillas', 123, 'roasted salmon fillet with latkes, baby beets & horseradish cream', 124, 'cured salmon with new potatoes and asparagus', 125, 'market fish with crushed potatoes and herb dressing', 126, 'warm tuna salad', 127, 'whole baked snapper', 128, 'simple fish bouillabaisse', 129, 'snapper, potato & porcini al cartoccio', 130, 'sicilian fish couscous', 131, 'tuna kebabs with olive & caper salsa', 132]
const vegetarian = ["zucchini, mint and goat's cheese pizza", 134, "broccoli and anchovy orecchiette", 135, 'spanakopita', 136, 'stracci with pesto & peas', 137, 'farfalle with peas & tomato', 138, 'boyds asaparagus frittata', 139, 'rigatoncini with chilli & rosemary tomato sauce', 140, 'caponata', 141, 'braised ratatouille', 142, 'risotto with lemon & fennel', 143, 'risotto with garden greens and bacon', 144, 'roman risotta', 145, 'frijoles con queso', 146, 'twice-baked spinach souffles woth baked field mushrooms', 147, 'pasta with fetta and roasted vegetables', 148, 'bacon and mushroom stuffed potatoes', 149, 'eggs en cocotte', 150, 'greek omelette with spinach, feta and dill', 151, 'frittata - open faced omelettes', 152, 'ricotta gnocchi with italian sausage and tomato sauce', 153, 'baked tomato, olive & capsicum salad', 154, 'ragu with rigatoni', 155, 'store cupboard sauce and pasta', 156, "dunsandel store's macaroni cheese", 157, "mushroom pies with goat's cheese & pine nuts", 158, 'paella', 159, 'pork & fennel sausage orecchiette', 160, "spaghetti with schwed's snowbeans & pesto", 161, 'pasta with sicilian sauce', 162, 'pork sausage, silverbeet and red onion pasta', 163, 'baked penne with sausages and spinach', 164, 'fettucine with mince & veges', 165, 'classic dough for pizza or bread sticks (grissini)', 166, 'swiss brown caps with walnuts & blue cheese on tagliatelle', 167, 'spaghetti with anchovies & greens with butter crumbs', 168]
const vege = ["honey glazed roasted root vegetables", 170, "peas with feta, mint & olive oil", 171, 'green bean and asparagus salad', 172, 'potatoes, kumara and carrots roasted in herd and garlic butter with sour cream dressing', 173, 'new potatoes with herb mayonnaise', 174, 'mushrooms with garlic & sherry', 175, 'roasted pumpkin, celery, coriander & paprika', 176, 'roast kumara with apple, maple syrup & mint', 177, 'gilled eggplant with garlic, wine & tomatoes', 178, 'swede mash with roasted garlic', 179, 'roasted cajun kumara', 180, 'gratin dauphinois', 181, 'carrots & snow peas in a cumin glaze', 182, 'summer green salad', 183, 'asparagus, shaved fennel and pecorino with lemon-basil vinaigrette', 184, 'roast potatoes', 185, 'potato mash', 186, 'apsaragus carpaccio', 187]

const any = lamb.concat(beef, pork, poultry, fish, vegetarian, vege) //add the rest of the lists with commas
console.log(any)
function search(data) {
    search_term = document.getElementById("search_box").value.toLowerCase()
    search_category = document.getElementById("type").value
    console.log(search_term)
    console.log(search_category)
    const search_results = []
    const search_results_num = []
    const search_results_category = []


    if (search_category==="lamb"){
        for (let i = 0; i < lamb.length; i += 2){
            if (lamb[i].includes(search_term)) {
                search_results.push(lamb[i])
                search_results_num.push(lamb[i+1])
                search_results_category.push("Lamb")
            }
        }
    } else if (search_category==="beef"){
        for (let i = 0; i < beef.length; i += 2){
            if (beef[i].includes(search_term)) {
                search_results.push(beef[i])
                search_results_num.push(beef[i+1])
                search_results_category.push("Beef")
            }
        }
    } else if (search_category==="pork"){
        for (let i = 0; i < pork.length; i += 2){
            if (pork[i].includes(search_term)) {
                search_results.push(pork[i])
                search_results_num.push(pork[i+1])
                search_results_category.push("Pork")
            }
        }
    } else if (search_category==="poultry"){
        for (let i = 0; i < poultry.length; i += 2){
            if (poultry[i].includes(search_term)) {
                search_results.push(poultry[i])
                search_results_num.push(lamb[i+1])
                search_results_category.push("Duck/Poultry")
            }
        }
    } else if (search_category==="fish"){
        for (let i = 0; i < fish.length; i += 2){
            if (fish[i].includes(search_term)) {
                search_results.push(fish[i])
                search_results_num.push(fish[i+1])
                search_results_category.push("Fish")
            }
        }
    } else if (search_category==="vegetarian"){
        for (let i = 0; i < vegetarian.length; i += 2){
            if (vegetarian[i].includes(search_term)) {
                search_results.push(vegetarian[i])
                search_results_num.push(vegetarian[i+1])
                search_results_category.push("Vegetarian")
            }
        }
    } else if (search_category==="vege"){
        for (let i = 0; i < vege.length; i += 2){
            if (vege[i].includes(search_term)) {
                search_results.push(vege[i])
                search_results_num.push(vege[i+1])
                search_results_category.push("Vegetables")
            }
        }
    } else if (search_category==="any"){
        for (let i = 0; i < any.length; i += 2){
            if (any[i].includes(search_term)) {
                search_results.push(any[i])
                search_results_num.push(any[i+1])
                if (lamb.includes(any[i])){
                    search_results_category.push("Lamb")
                } else if (beef.includes(any[i])){
                    search_results_category.push("Beef")
                } else if (pork.includes(any[i])){
                    search_results_category.push("Pork")
                } else if (poultry.includes(any[i])){
                    search_results_category.push("Duck/Poultry")
                } else if (fish.includes(any[i])){
                    search_results_category.push("Fish")
                } else if (vegetarian.includes(any[i])){
                    search_results_category.push("Vegetarian")
                } else if (vege.includes(any[i])){
                    search_results_category.push("Vegetables")
                }
            }
        }
    }
    console.log(search_results, search_results_num, search_results_category)

    var delete_parent = document.getElementById("results"); //deletes all the rows so the new ones can come in
    while (delete_parent.firstChild) {
        delete_parent.removeChild(delete_parent.lastChild)
    }


    for (let i = 0; i < search_results.length; i += 1){
        const new_row = document.createElement("div");
        new_row.className = "result";



        const arr = search_results[i].split(" ");

        for (var q = 0; q < arr.length; q++){
            arr[q] = arr[q].charAt(0).toUpperCase() + arr[q].slice(1);
        }

        const final_result = arr.join(" ");

        var text = document.createTextNode(final_result)
        const recipe = document.createElement("p");
        recipe.className = "recipe";
        recipe.appendChild(text);
        new_row.appendChild(recipe);

        var category_type = document.createTextNode(search_results_category[i])
        const category = document.createElement("p");
        category.className = "category";
        category.appendChild(category_type);
        new_row.appendChild(category);

        var number = document.createTextNode(search_results_num[i])
        const rec_num = document.createElement("p");
        rec_num.className = "page_no";
        rec_num.appendChild(number);
        new_row.appendChild(rec_num);




        var parent = document.getElementById("results");
        parent.appendChild(new_row)
    }




}