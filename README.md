# [Software Faire Guide](https://cs210.github.io/SoftwareGuide/)
## Testing

First, run the development server:

```bash
npm run dev
```

Note that this website is hosted on github io pages. With the correct
Repo configuraitons you can simply push to main to update the software guide.

## Updating the Software Guide
To update team information for the software guide you need only touch the
.csv files inside of update_software_guide. Once each relevant .csv has 
been updated you can run 

```bash
python .\software_guide_generator.py
```
This will automatically write the relevent .json files and code to the 
Next.js project and update the software guide. 

### How to change teaminfo
Note that all of the team information can be found team_info.csv inside of the update_software_guide folder.
Here you can change the table each team is assigned to and any other relevant info. To assign two teams to
the same table you can simply append .a or .b to that teams table number. The fill color for each team will be automatically 
set to the AI category color if it is an AI-relevant project; otherwise, it will default to the first category color.

### How to add categories
If you would like to add categories, edit the categories.csv file within the update_software_guide folder. Add
a name and associated tailwind UI color.
