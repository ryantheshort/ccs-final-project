from rest_framework import serializers
from dj_rest_auth.models import TokenModel

class TokenSerializer(serializers.ModelSerializer):
    # id = serializers.ReadOnlyField(source='user.id')
    username = serializers.ReadOnlyField(source='user.username')
    # is_superuser = serializers.ReadOnlyField(source='user.is_superuser')
   

    class Meta:
        model = TokenModel
        fields = '__all__'