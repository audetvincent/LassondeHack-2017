package datascraper;

import java.net.*;
import java.util.HashMap;
import java.util.Map;
import java.util.Map.Entry;

import javax.xml.parsers.DocumentBuilder;
import javax.xml.parsers.DocumentBuilderFactory;

import org.w3c.dom.Document;
import org.w3c.dom.Element;
import org.w3c.dom.Node;
import org.w3c.dom.NodeList;

import 
import java.io.*;

public class Main {

	public static String NEWS_API_KEY = "d70e20f426a04bb68614dc5d80ba776c";
	
	public static void main(String[] args) {
		
		/*
        String csvFile = "/Users/Alexis/Documents/velo.csv";
        BufferedReader br = null;
        String line = "";
        String cvsSplitBy = ",";

        try {
            br = new BufferedReader(new FileReader(csvFile));
            while ((line = br.readLine()) != null) {

                // use comma as separator
                String[] infos = line.split(cvsSplitBy);
                //System.out.println("Coordonnees [lat= " + infos[infos.length - 2] + " , long=" + infos[infos.length - 1] + "]");
            }

        } catch (Exception e) {
        	e.printStackTrace();
        }
        */
		
		/*
        URL yahoo;
		try {
			yahoo = new URL("https://newsapi.org/v1/articles?source=google-news&sortBy=top&apiKey=" + NEWS_API_KEY);
	        URLConnection yc = yahoo.openConnection();
	        BufferedReader in = new BufferedReader(
	                                new InputStreamReader(
	                                yc.getInputStream()));
	        String inputLine;

	        while ((inputLine = in.readLine()) != null) 
	            System.out.println(inputLine);
	        in.close();
		} catch (Exception e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		*/
		
		String[] newsSources = { 
				"http://rss.cbc.ca/lineup/canada-montreal.xml",
				"http://applicatif.ville.montreal.qc.ca/e-cite/comm_rss.asp?lg=en",
				"http://globalnews.ca/montreal/feed/"
				};
		
		Map<String, String> links = new HashMap<>();
		
		
		for(String newsSource : newsSources){
			RSSFeedParser source = new RSSFeedParser(newsSource);					
			links.putAll(source.parse());
		}
		
		System.out.println(links.size() + " news scraped, here they are : ");
		System.out.println("-------------------------");
		
		for(Entry<String,String> entry : links.entrySet()){
			System.out.println(entry.getKey());
			System.out.println(entry.getValue());
			System.out.println();
		}

	}
}
