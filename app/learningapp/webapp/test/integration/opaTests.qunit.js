sap.ui.require(
    [
        'sap/fe/test/JourneyRunner',
        'learninglistreport/learningapp/test/integration/FirstJourney',
		'learninglistreport/learningapp/test/integration/pages/CategoryList',
		'learninglistreport/learningapp/test/integration/pages/CategoryObjectPage',
		'learninglistreport/learningapp/test/integration/pages/CoursesObjectPage'
    ],
    function(JourneyRunner, opaJourney, CategoryList, CategoryObjectPage, CoursesObjectPage) {
        'use strict';
        var JourneyRunner = new JourneyRunner({
            // start index.html in web folder
            launchUrl: sap.ui.require.toUrl('learninglistreport/learningapp') + '/index.html'
        });

       
        JourneyRunner.run(
            {
                pages: { 
					onTheCategoryList: CategoryList,
					onTheCategoryObjectPage: CategoryObjectPage,
					onTheCoursesObjectPage: CoursesObjectPage
                }
            },
            opaJourney.run
        );
    }
);