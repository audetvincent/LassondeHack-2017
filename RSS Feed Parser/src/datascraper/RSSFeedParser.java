package datascraper;

import java.io.BufferedReader;
import java.io.InputStreamReader;
import java.io.PrintWriter;
import java.net.URL;
import java.net.URLConnection;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.xml.parsers.DocumentBuilder;
import javax.xml.parsers.DocumentBuilderFactory;

import org.w3c.dom.Document;
import org.w3c.dom.Element;
import org.w3c.dom.Node;
import org.w3c.dom.NodeList;

public class RSSFeedParser {
	
	String s;
	
	public RSSFeedParser(String url){
		this.s = url;
	}
	
	public Map<String,String> parse(){
		
		HashMap<String, String> ret = new HashMap<>();
		
        URL url;
		try {
			//get file
			url = new URL(s);
	        URLConnection yc = url.openConnection();
	        BufferedReader in = new BufferedReader(
	                                new InputStreamReader(
	                                yc.getInputStream()));
	        String inputLine;
	        
	        //write to local xml file 
	        PrintWriter writer = new PrintWriter("news.xml", "UTF-8");
	        
	        while ((inputLine = in.readLine()) != null) 
	        	writer.println(inputLine);
			
		    writer.close();
		    
			DocumentBuilderFactory dbFactory = DocumentBuilderFactory.newInstance();
			DocumentBuilder dBuilder = dbFactory.newDocumentBuilder();
			Document doc = dBuilder.parse("/Users/Alexis/workspace/datascraper/news.xml");

			doc.getDocumentElement().normalize();

			//gets the nodes for each news article
			NodeList nList = doc.getElementsByTagName("item");


			for (int temp = 0; temp < nList.getLength(); temp++) {

				Node nNode = nList.item(temp);

				if (nNode.getNodeType() == Node.ELEMENT_NODE) {

					Element eElement = (Element) nNode;

					String titreArticle = eElement.getElementsByTagName("title").item(0).getTextContent();
					String urlToArticle = eElement.getElementsByTagName("link").item(0).getTextContent();
					
					ret.put(titreArticle, urlToArticle);
				}
			}
			
		} catch (Exception e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		
		return ret;
	}
}
