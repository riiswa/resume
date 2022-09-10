for f in $(ls *.json | grep -v package); do
    ejs ./index.ejs -f "$f" -o "public/${f%.*}.html"
done;