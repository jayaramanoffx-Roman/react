from django.db import models

class Product(models.Model):

    product_name = models.CharField(max_length=200)

    product_price = models.IntegerField()

    product_description = models.TextField()

    product_image = models.ImageField(upload_to='products/')

    def __str__(self):
        return self.product_name