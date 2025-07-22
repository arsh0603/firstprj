# from django.http import JsonResponse
# from django.views import View
# import requests

# class FetchDetailsView(View):
#     def get(self, request):
#         id = request.GET.get('id')
#         if not id:
#             return JsonResponse({'error': 'ID parameter is required'}, status=400)
                
#         # Construct the external API URL using the captured ID
#         api_url = f'http://grover.rtp.netapp.com/KO/rest/api/Runs/{id}?req_fields=purpose,user,peak_mbs'        
#         try:
#             # Make the request to the external API
#             response = requests.get(api_url)
#             response.raise_for_status()
#             data = response.json()
#             return JsonResponse(data, safe=False)
#         except requests.exceptions.RequestException as e:
#             return JsonResponse({'error': str(e)}, status=500)

from django.http import JsonResponse
from django.views import View
import requests

class FetchDetailsView(View):
    def get(self, request):
        id1 = request.GET.get('id1')
        id2 = request.GET.get('id2')
        
        if not id1 or not id2:
            return JsonResponse({'error': 'Both id1 and id2 parameters are required'}, status=400)
        
        api_url_template = 'http://grover.rtp.netapp.com/KO/rest/api/Runs/{}?req_fields=workload,peak_iter,ontap_ver,peak_ops,peak_lat'
        
        try:
            response1 = requests.get(api_url_template.format(id1))
            response1.raise_for_status()
            data1 = response1.json()
            
            response2 = requests.get(api_url_template.format(id2))
            response2.raise_for_status()
            data2 = response2.json()
            
            combined_data = {
                'id1': data1,
                'id2': data2
            }
            
            return JsonResponse(combined_data, safe=False)
        except requests.exceptions.RequestException as e:
            return JsonResponse({'error': str(e)}, status=500)
