## Testing

First, run the development server:

```bash
npm run dev
```

Note that this website is hosted on github io pages. With the correct
Repo configuraitons you can simply bush to main to update the software guide.

## Updating the Software Guide
To update team information for the software guide you need only touch the
.csv files inside of update_software_guide. Once each relevant .csv has 
been updated you can run 

```bash
python .\software_guide_generator.py
```
This will automatically write the relevent .json files and code to the 
Next.js project and update the software guide. 