
# Copy all assets from old project to new project
$src = "c:\Users\Tushar\Downloads\BAGHEERA\bagheeracafenext-main\src\assets"
$dst = "c:\Users\Tushar\Downloads\BAGHEERA\bagheera-nextjs\src\assets"
$pub = "c:\Users\Tushar\Downloads\BAGHEERA\bagheera-nextjs\public\assets"

# Create destination folders if they don't exist
New-Item -ItemType Directory -Force -Path $dst | Out-Null
New-Item -ItemType Directory -Force -Path $pub | Out-Null

# Copy everything to src/assets (for ES module imports: JSON + grassImg)
Get-ChildItem -Path $src | ForEach-Object {
    Copy-Item -Path $_.FullName -Destination $dst -Force
}

# Copy image files to public/assets (for static /assets/... paths in Next.js Image)
Get-ChildItem -Path $src -Include "*.jpg","*.jpeg","*.png","*.webp","*.gif","*.svg" -File | ForEach-Object {
    Copy-Item -Path $_.FullName -Destination $pub -Force
}

# Copy favicon
$favicon = "c:\Users\Tushar\Downloads\BAGHEERA\bagheeracafenext-main\public\bagheera logo.png"
$faviconDst = "c:\Users\Tushar\Downloads\BAGHEERA\bagheera-nextjs\public\bagheera-logo.png"
Copy-Item -Path $favicon -Destination $faviconDst -Force

Write-Host "Done! Copied assets to src/assets and public/assets"
