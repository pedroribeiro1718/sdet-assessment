Test ID	Title	Preconditions	Test Steps	Expected Result	Actual Result	Status	Bug IDs
TC-001	Search box returns city suggestions	User is on the Activity Ranking page with internet access	1. Click on the city search input field	Search field becomes active			
TC-001	Search box returns city suggestions	User is on the Activity Ranking page with internet access	2. Type "Votu" into the search field	Autocomplete dropdown appears			
TC-001	Search box returns city suggestions	User is on the Activity Ranking page with internet access	3. Observe suggestions list	List displays matching cities			
TC-001	Search box returns city suggestions	User is on the Activity Ranking page with internet access	4. Inspect suggestion items	Each suggestion shows a city name			

TC-002	Selecting a suggestion loads activity rankings	User is on the Activity Ranking page	1. Type "Votuporanga" into the search field	Suggestions appear			
TC-002	Selecting a suggestion loads activity rankings	User is on the Activity Ranking page	2. Select "Votuporanga" from suggestions	Search box populates with selected city			
TC-002	Selecting a suggestion loads activity rankings	User is on the Activity Ranking page	3. Wait for results to load	Activity ranking results appear			
TC-002	Selecting a suggestion loads activity rankings	User is on the Activity Ranking page	4. Inspect activity results	At least one activity ranking is displayed			

TC-003	Activities display reasoning for ranking	User has selected a city from suggestions	1. Observe activity ranking results	List of activities is displayed			
TC-003	Activities display reasoning for ranking	User has selected a city from suggestions	2. Inspect each activity item	Each activity includes a textual explanation for its ranking			

TC-004	Activity rankings show 7 days of results	User has selected a city from suggestions	1. Observe results table or list	Activities are displayed for upcoming days			
TC-004	Activity rankings show 7 days of results	User has selected a city from suggestions	2. Inspect displayed dates	Seven distinct forecast days are shown			

TC-005	Skiing activity reflects snowfall conditions	User has selected a city with no snowfall forecast	1. Inspect the activity rankings	"Skiing" appears in the activity list			
TC-005	Skiing activity reflects snowfall conditions	User has selected a city with no snowfall forecast	2. Observe the skiing score	Skiing score is 0 when snowfall is 0			

TC-006	Unknown city returns no suggestions	User is on the Activity Ranking page	1. Type "zzzzzzzz" into the search field	No suggestions are displayed			

TC-007	Slow API response handling	User is on the Activity Ranking page with throttled network	1. Type a valid city name	Loading indicator appears			
TC-007	Slow API response handling	User is on the Activity Ranking page with throttled network	2. Wait for results	Results eventually load without UI crash			

TC-008	Invalid input handling	User is on the Activity Ranking page	1. Enter special characters such as "@#$%"	No suggestions are returned or validation message appears