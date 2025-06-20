cd /var/www/MiWeb2.0/
git pull
rm -r /var/www/blazor
cd /var/www/MiWeb2.0/Mi\ Web/bin/Release/net9.0/publish/
cp -r wwwroot/ /var/www/blazor
sudo systemctl restart nginx
sudo systemctl reload nginx
sudo rm -rf /var/cache/nginx/*