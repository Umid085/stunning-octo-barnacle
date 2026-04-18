from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('contact', '0001_initial'),
    ]

    operations = [
        migrations.RenameField(
            model_name='usermessage',
            old_name='message',
            new_name='comment',
        ),
        migrations.AddField(
            model_name='usermessage',
            name='call',
            field=models.CharField(blank=True, default='', max_length=20),
            preserve_default=False,
        ),
        migrations.AddField(
            model_name='usermessage',
            name='budget',
            field=models.IntegerField(blank=True, null=True),
        ),
    ]
