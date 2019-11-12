import random
import json
import os
from datetime import datetime

from cms.settings import BASE_DIR
from django.shortcuts import render
from django.http import HttpResponse


def index(request):
    names = ("bob", "dan", "jack", "lizzy", "susan")
    pdf_path = os.path.join(BASE_DIR, "pdf", "media", "problem")
    # print(pdf_path)
    pdfs = os.listdir(pdf_path)
    print(pdfs)

    pdf_list = []
    for pdf in pdfs:
        pdf_list.append({
            "name": pdf,
            "url": "http://127.0.0.1" + "/" + pdf,
        })
    '''
    [{"name": "hello.pdf", "url": "http://127.0.0.1/hello.pdf"}, 
    {"name": "preview.pdf", "url": "http://127.0.0.1/preview.pdf"}]
        
    '''

    
    files1 = ['111.pdf', '222.pdf', '333.pdf']
    files2 = ['444.pdf', '555.pdf', '666.pdf']
    data = {}
    data['problem'] = files1
    data['document'] = files2

    context = {}
    context["items_json"] = json.dumps(pdf_list)
    # context = json.dumps(data)
    print(context)
    print(data)
    print(666)

    

    #context = {}
    #context["file_data"] = json.dumps(file_list)
    #print(context)
    # return render(request, 'vue_list.html', context)
    return render(request, "vue_list.html", context)