// Open Menu
function showMenu() {
    document.getElementById('mobile_menu').classList.toggle('menu_show')
}

function resizeMenu() {
    document.getElementById('mobile_menu').classList.remove('menu_show')
}

// Open FAQ
function showFAQ(e) {
    document.getElementById('faq_popup').classList.toggle('popup_show');
    document.getElementById('answer').textContent = faqAnswer[e];
    document.getElementById('question').textContent = faqQuestion[e];
}

function closeFAQ() {
    document.getElementById('faq_popup').classList.remove('popup_show')
}

function showContactPop() {
    document.getElementById('contact_popup').classList.toggle('popup_show');
}

function closeContactPop() {
    document.getElementById('contact_popup').classList.remove('popup_show')
}

function calcQuote() {
 employees = document.getElementById('employees').value;
 revenue = document.getElementById('revenue').value;
 total = (employees * .1) + (revenue * .001);
 document.getElementById('total').innerHTML = "<h1>$" + total.toFixed(2) + "<span>/mo<span><h1>"  
}

function goBack() {
    window.history.back();
}

var faqQuestion = [
    "Why should I choose a monthly accountant vs. less frequent methods of accounting?",
    
    "How can I transition from in-house to outsourced accounting?",
    
    "What are the best ways to separate my business and personal finances?",
    
    "How can I tell if I've outgrown my current accounting firm?",
    
    "How does better accounting affect my bottom line?",
    
    "How can I make my new business financially successful?",
    
    "What questions should I ask when choosing the right accountant for my business?",
    
    "How much does monthly accounting cost? What factors go into the pricing?"
]

var faqAnswer = [
    "Accounting is something that small businesses need to keep up on. Managing your cash flow is especially important for growing businesses. With our monthly accounting service we can better provide you with the services you depend on to run your businesses. By working with us on a monthly basis we can get to know you and your business better. In the long run a monthly accounting service actually saves you money. By meeting monthly our CPAs can quickly pick up on trends in your finances. These trends can then be analyzed to help you make smarter businesses choices that save you both time and money.",

    "Transitioning from in house accounting to outsourced accounting doesn’t have to be tricky at all. All you have to do is bring in your records and documents and together you and a trained CPA can go through all of your financial records. The transition process can take up to 4 weeks depending on your accounts. Over the course of the transition process our CPAs will need to contact you. Keeping in constant contact with your CPA will make the process much easier.",
    
    "Keeping your business and personal finances separate is very important.  To ensure your finances are kept separate you should set up separate checking accounts. Try to avoid using cash for business transactions and only use your company credit cards. This helps your business build credit and makes it easier when it comes time to file your taxes. Keep a separate shoe box for your receipts (maybe not literally a shoe box) but keep your business and personal receipts separate. If you are paying yourself, set your salary and don’t exceed it.",
    
    "You may have started working with a smaller accounting firm when your business was just getting started but you will eventually outgrow that smaller firm. When your old accounting firm can no longer handle your business’ needs it time you start looking for a new accounting firm. When looking around for a new accounting firm you should shop for the best price along with the most experience. Accuracy Accounting has locked in its prices since 2010. We also have over 15 years of experience helping Arizona’s small businesses.",
    
    "Better accounting can and will affect your bottom line. Sloppy accounting work can cost you hundreds of dollars per month. As your business grows careless mistakes will have an increased impact. Accuracy Accounting has a three-step verification process for all of the transactions we review and records. The process ensures that at least 3 different CPAs check over financial records before the records are uploaded to our servers. Our servers will also analyze data in order to check for discrepancies.",
    
    "Running a financially successful business is a very difficult and daunting task. 50% of businesses fail during their first 5 years. However, only 3% of businesses that partner with Accuracy Accounting fail during their first 5 years. The way we manage such a high success rate is by making sure business owners never go beyond their means. It’s tempting to try to expand your business faster but moving forward carefully and slowly often times proves to be more successful in the long run.",
    
    "An honest and accurate accounting firm should be able to answer all of your questions upfront without any sugar coating. If you feel like the accountant isn’t being upfront with you then they probably aren’t. We like to provide the opportunity for potential customers to ask questions before they commit. We offer customers to book a free, no obligation, consultation. The consultation allows customers to get a feel for Accuracy Accounting and helps us understand you, your business, and your business’s needs. At the end of the day if you're not convinced that’s okay, we can still be friends.",
    
   "Prices are one of the most confusing things in the world. That’s why we made our pricing simple. If you select our Startup plan for $125/mo then that’s exactly what you’ll pay. We include all of our taxes and fees right in the price tag so you don’t have to play games. We give you the real price up front so that you’re not shocked later on when the bill comes. Accuracy Accounting believes in upfront pricing because nobody really likes math anyways."
]
